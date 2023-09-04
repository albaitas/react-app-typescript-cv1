// q: what is the best way to store todos across sessions without using backend and why?
// a: localStorage - it is the easiest way to store data in the browser
// q: what are the limitations of localStorage for this purpose?
// a: it is limited to 5MB, it is synchronous, it is not searchable
// q: what are the alternatives if we add that many todos in the future?
// a: IndexedDB, WebSQL, cookies, sessionStorage, service workers
// q: whish one would you choose and why?
// a: IndexedDB - it is the most powerful and flexible solution
// q: what are the limitations of IndexedDB?
// a: it is asynchronous, it is not searchable
// q: how would you make it searchable?
// a: I would create a separate storage class that is searchable by string - case insensitive
// q: what are the limitations of this approach?
// a: it is not searchable by other fields
// q: how would you make it searchable by other fields?
