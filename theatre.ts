class Seat {
    id: number;
    row: string;
    number: number;
    isAvailable: boolean;
  
    constructor(id: number, row: string, number: number, isAvailable: boolean) {
      this.id = id;
      this.row = row;
      this.number = number;
      this.isAvailable = isAvailable;
    }
  }
  
  class Show {
    id: number;
    title: string;
    date: Date;
    time: string;
    genre: string;
    seats: Seat[];
  
    constructor(id: number, title: string, date: Date, time: string, genre: string, seats: Seat[]) {
      this.id = id;
      this.title = title;
      this.date = date;
      this.time = time;
      this.genre = genre;
      this.seats = seats;
    }
  
    bookSeat(seatId: number): boolean {
      const seat = this.seats.find(seat => seat.id === seatId);
      if (seat && seat.isAvailable) {
        seat.isAvailable = false;
        return true;
      }
      return false;
    }
  
    cancelSeat(seatId: number): boolean {
      const seat = this.seats.find(seat => seat.id === seatId);
      if (seat && !seat.isAvailable) {
        seat.isAvailable = true;
        return true;
      }
      return false;
    }
  }
  
  const seat1 = new Seat(1, 'A', 1, true);
  const seat2 = new Seat(2, 'A', 2, true);
  const show = new Show(1, 'Theatre Play', new Date(), '7:00 PM', 'Drama', [seat1, seat2]);
  
  const bookingResult = show.bookSeat(1);
  console.log(`Booking seat 1: ${bookingResult}`);
  
  const cancellationResult = show.cancelSeat(1);
  console.log(`Cancelling seat 1: ${cancellationResult}`);
  