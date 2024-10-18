var Seat = /** @class */ (function () {
    function Seat(id, row, number, isAvailable) {
        this.id = id;
        this.row = row;
        this.number = number;
        this.isAvailable = isAvailable;
    }
    return Seat;
}());
var Show = /** @class */ (function () {
    function Show(id, title, date, time, genre, seats) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.time = time;
        this.genre = genre;
        this.seats = seats;
    }
    Show.prototype.bookSeat = function (seatId) {
        var seat = this.seats.find(function (seat) { return seat.id === seatId; });
        if (seat && seat.isAvailable) {
            seat.isAvailable = false;
            return true;
        }
        return false;
    };
    Show.prototype.cancelSeat = function (seatId) {
        var seat = this.seats.find(function (seat) { return seat.id === seatId; });
        if (seat && !seat.isAvailable) {
            seat.isAvailable = true;
            return true;
        }
        return false;
    };
    return Show;
}());
var seat1 = new Seat(1, 'A', 1, true);
var seat2 = new Seat(2, 'A', 2, true);
var show = new Show(1, 'Theatre Play', new Date(), '7:00 PM', 'Drama', [seat1, seat2]);
var bookingResult = show.bookSeat(1);
console.log("Booking seat 1: ".concat(bookingResult));
var cancellationResult = show.cancelSeat(1);
console.log("Cancelling seat 1: ".concat(cancellationResult));
