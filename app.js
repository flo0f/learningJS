/* 
   дополнить объект методами для получения имени:
   - компании
   - сео
   - сотрудника
*/

const company = {
   name: 'ООО Агро',
   employees: [
      {
         name: 'Света',
         getEmployeeName: function() {
            console.log(this.name);
         }
      }
   ],
   ceo: {
      name: 'Вася',
      getCeoName: function() {
         console.log(this.name);
      }
   },
   getCoName: function() {
      console.log(this.name);
   }
};

company.getCoName();
company.ceo.getCeoName();
company.employees.map(employee => employee.getEmployeeName())

