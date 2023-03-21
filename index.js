/* Your Code Here */

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(record => createEmployeeRecord(record));
};

function createTimeInEvent(dateStamp) {
    const timeIn = {
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0, 10)
    };

    this.timeInEvents.push(timeIn);

    return this;
};

function createTimeOutEvent(dateStamp) {
    const timeOut = {
        type: "TimeOut",
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0, 10)
    };

    this.timeOutEvents.push(timeOut);

    return this;
};

function hoursWorkedOnDate(justDate) {
    const timeIn = this.timeInEvents.find(element => element.date === justDate).hour;
    const timeOut = this.timeOutEvents.find(element => element.date === justDate).hour;

    return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(justDate) {
    const wage = this.payPerHour;
    const hoursWorked = hoursWorkedOnDate.call(this, justDate);
    const totalWages = wage * hoursWorked;

    return totalWages;
}

function findEmployeeByFirstName(srcArray, name) {
    return srcArray.find(src => src.firstName === name)
}

function calculatePayroll(empArray) {
    const allPay = empArray.map((employee) => {return allWagesFor.call(employee)});
    return allPay.reduce((total, empTotal) => total + empTotal);
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

