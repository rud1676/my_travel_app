"use client";

/* eslint-disable react/function-component-definition */
import React, { useMemo } from "react";
import Resizer from "react-image-file-resizer";
import ReactQuill, { Quill } from "react-quill-2";
import PropTypes from "prop-types";
import QuillImageDropAndPaste from "quill-image-drop-and-paste";
import QuillBetterTable from "quill-better-table";
import "react-quill-2/dist/quill.snow.css";
import moment from "moment";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      1080, // maxWidth
      1920, // maxHeight
      "PNG", // img Type
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "file" // output Type
    );
  });

Quill.register({ "modules/better-table": QuillBetterTable }, true);
Quill.register("modules/imageDropAndPaste", QuillImageDropAndPaste);

function QuillEditor({
  inputEditor,
  content,
  uploadFun,
  formDataName,
  afterUploadImage,
  onAlarm,
}) {
  // foucs 문제로 인해 useMemo 를 사용
  // useMemo 를 사용하지 않으면 렌더링 할때마다 quill editor 에 포커싱이 된다.
  const modules = useMemo(() => {
    const uploadImageAndInsertEmbed = async (formData) => {
      try {
        const { data } = await uploadFun(formData);

        const quill = inputEditor.current.editor;

        const range = quill.getSelection(true);

        quill.insertEmbed(range.index, "image", data.url);
        quill.setSelection(range.index + 1);

        afterUploadImage();
      } catch {
        if (onAlarm) {
          onAlarm({ title: "이미지 삽입 실패", color: "red" });
        }
      }
    };
    return {
      uploader: false,
      imageDropAndPaste: {
        handler: async (_imageDataUrl, _type, imageData) => {
          const image = await resizeFile(imageData);
          const file = image.toFile(
            `image_${moment().format("YY-MM-DD-HH:mm:ss")}.png`
          );
          const formData = new FormData();
          formData.append(formDataName, file);

          await uploadImageAndInsertEmbed(formData);
        },
      },
      table: false,
      "better-table": {
        operationMenu: {
          items: {
            insertColumnRight: {
              text: "오른쪽 열 삽입",
            },
            insertColumnLeft: {
              text: "왼쪽 열 삽입",
            },
            insertRowUp: {
              text: "위의 행 삽입",
            },
            insertRowDown: {
              text: "아래 행 삽입",
            },
            mergeCells: {
              text: "셀 병합",
            },
            unmergeCells: {
              text: "셀 분할",
            },
            deleteColumn: {
              text: "열 삭제",
            },
            deleteRow: {
              text: "행 삭제",
            },
            deleteTable: {
              text: "표 삭제",
            },
          },
          color: {
            colors: ["green", "red", "yellow", "blue", "white"],
            text: "배경 색",
          },
        },
      },
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ color: [] }, { background: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          [{ align: [] }],
          ["link", "image", "video"],
          ["clean"],
          ["betterTable"],
        ],
        handlers: {
          image() {
            const input = document.createElement("input");

            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.click();

            input.onchange = async () => {
              const file = input.files[0];
              const image = await resizeFile(file);
              const formData = new FormData();
              formData.append(formDataName, image);
              await uploadImageAndInsertEmbed(formData);
            };
          },
          betterTable() {
            const quill = inputEditor.current.editor;
            const tableModule = quill.getModule("better-table");
            tableModule.insertTable(3, 3);
          },
        },
      },
    };
  }, [inputEditor, formDataName, afterUploadImage, uploadFun, onAlarm]);

  return (
    <div id="quill-editor">
      <ReactQuill
        defaultValue={content}
        theme="snow"
        ref={inputEditor}
        modules={modules}
      />
    </div>
  );
}

QuillEditor.propTypes = {
  inputEditor: PropTypes.shape({ current: PropTypes.instanceOf(Object) })
    .isRequired,
  content: PropTypes.string,
  uploadFun: PropTypes.func.isRequired,
  formDataName: PropTypes.string.isRequired,
  afterUploadImage: PropTypes.func.isRequired,
  onAlarm: PropTypes.func.isRequired,
};

QuillEditor.defaultProps = {
  content: "",
};

export default QuillEditor;
