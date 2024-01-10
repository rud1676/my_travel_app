import React from 'react';
import ReactQuill, { Quill } from 'react-quill-2';
import QuillBetterTable from 'quill-better-table';
import 'react-quill-2/dist/quill.snow.css';
import PropTypes from 'prop-types';

Quill.register({ 'modules/better-table': QuillBetterTable }, true);

function QuillViewer({ content }) {
  const modules = {
    toolbar: [],
    table: false,
    'better-table': {},
  };

  return (
    <div id="quill-viewer">
      <ReactQuill modules={modules} readOnly value={content} />
    </div>
  );
}

QuillViewer.propTypes = {
  content: PropTypes.string.isRequired,
};

export default QuillViewer;
