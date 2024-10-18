export class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public publishedYear: number,
        public availableCopies: number
    ) {}

    checkAvailability(): boolean {
        return this.availableCopies > 0;
    }

    lendBook(): void {
        if (this.checkAvailability()) {
            this.availableCopies--;
        } else {
            throw new Error('No copies available');
        }
    }

    returnBook(): void {
        this.availableCopies++;
    }
}
