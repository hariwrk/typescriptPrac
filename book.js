"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(id, title, author, publishedYear, availableCopies) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.availableCopies = availableCopies;
    }
    Book.prototype.checkAvailability = function () {
        return this.availableCopies > 0;
    };
    Book.prototype.lendBook = function () {
        if (this.checkAvailability()) {
            this.availableCopies--;
        }
        else {
            throw new Error('No copies available');
        }
    };
    Book.prototype.returnBook = function () {
        this.availableCopies++;
    };
    return Book;
}());
exports.Book = Book;
