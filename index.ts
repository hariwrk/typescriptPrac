import { Book } from './book';
import { Member } from './Member';

const book1 = new Book(1, '2020', 'abc book',  200, 3);
const member1 = new Member(1, 'hari', 'abc@gmail.com');

console.log(book1.checkAvailability()); 
book1.lendBook();
console.log(book1.availableCopies); 
console.log(member1.getMemberInfo()); 
