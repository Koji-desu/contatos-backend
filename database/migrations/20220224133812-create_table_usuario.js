'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.createTable('usuarios', 
      {
         id:{ 
          type: Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey: true,
          allowNull: false
         },
         email: {
           type: Sequelize.STRING(100),
           allowNull: false
         },
         nome: {
           type: Sequelize.STRING(100),
           allowNull: false
         },
         senha: {
           type: Sequelize.STRING(256),
           allowNull: false
         }

       });

  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable('usuarios');
  
  }
};

