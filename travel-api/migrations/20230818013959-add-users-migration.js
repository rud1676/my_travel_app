const config = require('config').sequelize;
const bcrypt = require('bcrypt');
const { deletedAtCreate, defaultCreate } = require('../migrationLib/createHelper');
const { saltRounds } = require('../src/define');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER DATABASE ${config.database} CHARACTER SET ${config.define.charset} COLLATE ${config.define.dialectOptions.collate};`
    );

    await queryInterface.createTable('attachments', {
      ...defaultCreate,
      originalname: {
        type: Sequelize.STRING
      },
      key: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      }
    });

    // db 속성 변경
    await queryInterface.createTable('users', {
      ...deletedAtCreate,
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        // 어드민 로그인시 필요
        type: Sequelize.STRING
      },
      alarm: {
        type: Sequelize.BOOLEAN
      },
      alarmTime: {
        type: Sequelize.TIME
      },
      name: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      provider: {
        type: Sequelize.STRING
      },
      snsId: {
        type: Sequelize.STRING
      },
      lastLoginAt: {
        type: Sequelize.DATE
      },
      imageId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'attachments' // 참조할 테이블 (DB에 있는 테이블 이름과 같아야한다.)
          // field: 'id' // 참조할 필드 이름
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      },
      gender: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      birth: {
        type: Sequelize.DATEONLY
      },
      nation: {
        type: Sequelize.STRING
      }
    });

    const timeFields = {
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')
    };
    const passwordHash = await bcrypt.hash('admin', saltRounds);

    await queryInterface.bulkInsert('users', [
      {
        nickname: '관리자',
        name: '관리자',
        password: passwordHash,
        email: 'travel@gmail.com',
        admin: true,
        ...timeFields
      }
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  }
};
