'use strict';

module.exports = {
  friendlyDate: function friendlyDate(a) {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var day = days[a.getDay()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time_friendly = this.getTime(a);
    var time = {
      day: day,
      date: date,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      time_friendly: time_friendly
    };
    return time;
  },
  getTime: function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;
    return strTime;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImZyaWVuZGx5RGF0ZSIsImEiLCJtb250aHMiLCJkYXlzIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERheSIsImRhdGUiLCJnZXREYXRlIiwiaG91ciIsImdldEhvdXJzIiwibWluIiwiZ2V0TWludXRlcyIsInNlYyIsImdldFNlY29uZHMiLCJ0aW1lX2ZyaWVuZGx5IiwiZ2V0VGltZSIsInRpbWUiLCJob3VycyIsIm1pbnV0ZXMiLCJhbXBtIiwic3RyVGltZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFBLEFBQU87Z0JBQ1Msc0JBQUEsQUFBUyxHQUFHLEFBQ3hCO1FBQUksU0FBUyxDQUFBLEFBQUMsT0FBRCxBQUFPLE9BQVAsQUFBYSxPQUFiLEFBQW1CLE9BQW5CLEFBQXlCLE9BQXpCLEFBQStCLE9BQS9CLEFBQXFDLE9BQXJDLEFBQTJDLE9BQTNDLEFBQWlELE9BQWpELEFBQXVELE9BQXZELEFBQTZELE9BQTFFLEFBQWEsQUFBbUUsQUFDaEY7UUFBSSxPQUFPLENBQUEsQUFBQyxPQUFELEFBQU8sT0FBUCxBQUFhLFFBQWIsQUFBb0IsT0FBcEIsQUFBMEIsU0FBMUIsQUFBa0MsT0FBN0MsQUFBVyxBQUF3QyxBQUNuRDtRQUFJLE9BQU8sRUFBWCxBQUFXLEFBQUUsQUFDYjtRQUFJLFFBQVEsT0FBTyxFQUFuQixBQUFZLEFBQU8sQUFBRSxBQUNyQjtRQUFJLE1BQU0sS0FBSyxFQUFmLEFBQVUsQUFBSyxBQUFFLEFBQ2pCO1FBQUksT0FBTyxFQUFYLEFBQVcsQUFBRSxBQUNiO1FBQUksT0FBTyxFQUFYLEFBQVcsQUFBRSxBQUNiO1FBQUksTUFBTSxFQUFWLEFBQVUsQUFBRSxBQUNaO1FBQUksTUFBTSxFQUFWLEFBQVUsQUFBRSxBQUNaO1FBQUksZ0JBQWdCLEtBQUEsQUFBSyxRQUF6QixBQUFvQixBQUFhLEFBQ2pDO1FBQUk7V0FBTyxBQUNKLEFBQ0w7WUFGUyxBQUVILEFBQ047YUFIUyxBQUdGLEFBQ1A7WUFKUyxBQUlILEFBQ047WUFMUyxBQUtILEFBQ047V0FOUyxBQU1KLEFBQ0w7V0FQUyxBQU9KLEFBQ0w7cUJBUkYsQUFBVyxBQVFNLEFBRWpCO0FBVlcsQUFDVDtXQVNGLEFBQU8sQUFDUjtBQXZCZSxBQXdCaEI7V0FBUyxpQkFBQSxBQUFTO1FBQ1osUUFBUSxLQUFaLEFBQVksQUFBSyxBQUNqQjtRQUFJLFVBQVUsS0FBZCxBQUFjLEFBQUssQUFDbkI7UUFBSSxPQUFPLFNBQUEsQUFBUyxLQUFULEFBQWMsT0FBekIsQUFBZ0MsQUFDaEM7WUFBUSxRQUFSLEFBQWdCLEFBQ2hCO1lBQVEsUUFBQSxBQUFRLFFBTE0sQUFLdEIsQUFBd0IsR0FMRixBQUN0QixDQUk0QixBQUM1QjtjQUFVLFVBQUEsQUFBVSxLQUFLLE1BQWYsQUFBbUIsVUFBN0IsQUFBdUMsQUFDdkM7UUFBSSxVQUFVLFFBQUEsQUFBUSxNQUFSLEFBQWMsVUFBNUIsQUFBc0MsQUFDdEM7V0FBQSxBQUFPLEFBQ1I7QUFqQ0gsQUFBa0I7QUFBQSxBQUNoQiIsImZpbGUiOiJoZWxwZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b255c3Bpcm8vRGVza3RvcC9kZXZlbG9waW5nL3NpbXBsZS1yZWFjdC1ibG9nIn0=