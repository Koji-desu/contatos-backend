'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable(
      'telefones', 
      { id: 
        {type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        telefone: {type: Sequelize.STRING(45), allowNull: false},
        contato_id: {type: Sequelize.INTEGER, 
        allowNull: false,
        references: 
            { model:
                {tableName:'contatos'},
                 key:'id'
                },
        onDelete: 'cascade',
        onUpdate: 'cascade'
              }
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable('telefones');
  }
};