/*
https://www.codewars.com/kata/5bf774a81505a7413400006a

"hello. my name is inigo montoya. you killed my father. prepare to die." 
    => "Hello. My name is inigo montoya. You killed my father. Prepare to die."
*/

function fix(paragraph) {
    return arr = paragraph.split(". ").map(i => i[0].toUpperCase() + i.slice(1)).join(". ").trim();
}