class Vichales {
    constructor(id, name, company) {
      this.id = id;
      this.name = name;
      this.company = company;
    }
  }
  
  class Car extends Vichales {
    constructor(id, name, company, type) {
      super(id, name, company);
      this.type = type;
    }
  }
  
  class plane extends Vichales {
    constructor(id, name, company, type) {
      super(id, name, company);
      this.type = type;
    }
  }
  
  class Employee {
    constructor(id, name, barthOfDay) {
      this.id = id;
      this.name = name;
      this.barthOfDay = barthOfDay;
    }
  }
  
  class chauffeur extends Employee {
    constructor(id, name, barthOfDay, licenseID) {
      super(id, name, barthOfDay);
      this.licenseID = licenseID;
    }
  }
  
  class pilot extends Employee {
    constructor(id, name, barthOfDay, licenseID) {
      super(id, name, barthOfDay);
      this.licenseID = licenseID;
    }
  }
  
  class Reservation {
    static array = [];
    constructor(reservationDate, employeeId, vehiclesId, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehiclesId = vehiclesId;
      this.reservationID = reservationID;
      Reservation.presonHasReservation(this);
    }
  
    static presonHasReservation(a) {
      Reservation.array.push(a);
    }
  }
  
  const chauffeur1 = new chauffeur("chauffeur1", "Mohammed", "2000", "36334");
  const pilot1 = new pilot("pilot1", "nasser", "1997", "7626");
  
  let firstCar = new Car("car1", "Acoord", "Honda", "gas");
  let secCar = new Car("car2", "Morsedas", "benz1", "electric");
  let TheiCar = new Car("car3", "lamp", "lamporgainy", "gas");
  
  let firdtPlane = new plane("plane1", "omar", "t14", "gas");
  let secPlane = new plane("plane2", "azam", "f12", "gas");
  
  function VichaleWithEmployee(employeeId, vichaleId) {
    if (vichaleId.includes("car") && employeeId.includes("chauffeur")) {
      let res = new Reservation("2021-08-31", employeeId, vichaleId, "1");
    } else if (vichaleId.includes("plane") && employeeId.includes("pilot")) {
      let res = new Reservation("2021-08-31", employeeId, vichaleId, "1");
    } else {
      // alert(");
      console.log("he can not drive");
    }
  }
  
  VichaleWithEmployee(chauffeur1.id, firstCar.id);
  VichaleWithEmployee(pilot1.id, firdtPlane.id);
  VichaleWithEmployee(pilot1.id, secCar.id);
  VichaleWithEmployee(chauffeur1.id, TheiCar.id);
  
  Reservation.array.map((elment) => {
    console.log(
      elment.employeeId,
      elment.reservationDate,
      elment.reservationID,
      elment.vehiclesId
    );
  });
  