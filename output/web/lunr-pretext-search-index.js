var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-1-2-logic-sec-statements-arguments",
  "level": "1",
  "url": "sec-1-2-logic-sec-statements-arguments.html",
  "type": "Section",
  "number": "0.1",
  "title": "Statements, Arguments, and Truth Tables",
  "body": " Statements, Arguments, and Truth Tables   Overview  Logic is not the study of the content of an argument. Logic is the study of the structure of an argument. A logical analysis will never be able to tell you whether or not a particular claim has merit; it will only tell you if the truth of the conclusion follows necessarily from the truth of the premises.  What do I mean by the structure of an argument?  Consider the following arguments.  Argument 1:   If and , then .  Therefore, if , then or .   Argument 2:   If I like Math and I like Data Science, I will like Discrete Mathematics.  Therefore, if I do not like Discrete Mathematics, then I do not like Math or I do not like Data Science.   The content of these arguments is very different, but the structure is the same. They are both of the form:   If and , then .  Therefore, if not , then not or not .   Both are valid arguments in the context of formal logic, but one is true, while the other has little merit. The actual content contained within the statement variables , , and is irrelevant to our analysis. The structure is what matters.    Statements and Arguments.   Whenever you are studying a new branch of mathematics, you weant to start with a rigorous foundation. You'll want to define the space and the elements that live within it, impose some additional structure on that space, and then explore the consequences. So, in order to do that, we need some definitions:    A statement (or proposition ) is a sentence that is true or false but not both.      An atomic statement is a statement that cannot be divided into smaller statements.      A molecular statement is a statement that is not atomic.    Ways to combine statements:    The conjunction (i.e., and ) of and ( ) is true when and are both true, and false otherwise.  The disjunction (i.e., or ) of and ( ) is true when either or , or possibly both and , are true, and false otherwise.  The negation (i.e., not ) of ( or ) is true when is false, and false otherwise.      Truth Tables  To more easily define these terms, we introduce the concept of a truth table. What makes formal logic so nice to work with is the fact that each of the individual statements can only take on one of two values, (True) or (False). So, we enumerate them.  Consider the truth table for :                                Consider the truth table for :                                Consider the truth table for :                  These tables give us an easy framework to understand more complicated combinations of statements.   Examples  Here we'll run through a couple more truth tables so you can see what they might look like in more complicated situations.   Exclusive Or   In logic, the word or is inclusive ; that is, it includes the case in which both statements are true. It is useful to have a notion of an exclusive or that is only true when exactly one of and are true. I claim that the following statement form represents this concept:     Show that is true when exactly one of and is true by constructing a truth table.    We will construct a truth table for the statement .                                                  The last column is true when exactly one of and is true, as desired.       Example 2 : Draw the truth table for the statement .    We will construct a truth table for the statement .                                                                                       Logical Equivalence  Def. Two statements, and , are said to be logically equivalent if, and only if, they have the same truth value under any assignment of truth values to their atomic parts. If and are logically equivalent, we write .  Essentially, two statements are logically equivalent if they have identical columns on a truth tables.   Examples     Example 1 : and are logically eqivalent (i.e., ).    Consider the truth table for and :                      The two columns are identical, so .      Are and logically equivalent? That is, can you distribute the negation over the conjunction?    Consider the truth table for and :                                                        The two columns are not identical:                                      Hence , so you cannot distribute negations over conjunctions.    As we saw in , negations do not distribute over conjunctions. So how do you negate conjunctions?     De Morgan's Laws  What is the opposite of the statement I like Math and I like Data Science ? For the statement to be true, both atomic statements I like Math and I like Data Science need to be true. So, if the statement to be false, at least one of those atomic statements needs to be false. So:   (I like Math and I like Data Science) (I like Math) (I like Data Science)  That is, I claim .                                                        Similarly, (prove this!).  These equations are known as De Morgan's Laws :        Tautologies and Contradictions  For a copmplete foundation, we need two more definitions:    A tautology is a statement that is always true.      A contradiction is a statement that is always false.      Show that is a contradiction.    Consider the truth table for :                      Since is always false, it is a contradiction. Hence, .      Show that .    Consider the truth table for :                      Since is equivalent to , we have .      "
},
{
  "id": "def-statement",
  "level": "2",
  "url": "sec-1-2-logic-sec-statements-arguments.html#def-statement",
  "type": "Definition",
  "number": "0.1.1",
  "title": "",
  "body": "  A statement (or proposition ) is a sentence that is true or false but not both.   "
},
{
  "id": "def-atomic-statement",
  "level": "2",
  "url": "sec-1-2-logic-sec-statements-arguments.html#def-atomic-statement",
  "type": "Definition",
  "number": "0.1.2",
  "title": "",
  "body": "  An atomic statement is a statement that cannot be divided into smaller statements.   "
},
{
  "id": "def-molecular-statement",
  "level": "2",
  "url": "sec-1-2-logic-sec-statements-arguments.html#def-molecular-statement",
  "type": "Definition",
  "number": "0.1.3",
  "title": "",
  "body": "  A molecular statement is a statement that is not atomic.   "
},
{
  "id": "stmt-and-args-2-6",
  "level": "2",
  "url": "sec-1-2-logic-sec-statements-arguments.html#stmt-and-args-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conjunction disjunction negation "
},
{
  "id": "examples-3",
  "level": "2",
  "url": "sec-1-2-logic-sec-statements-arguments.html#examples-3",
  "type": "Example",
  "number": "0.1.4",
  "title": "Exclusive Or.",
  "body": " Exclusive Or   In logic, the word or is inclusive ; that is, it includes the case in which both statements are true. It is useful to have a notion of an exclusive or that is only true when exactly one of and are true. I claim that the following statement form represents this concept:     Show that is true when exactly one of and is true by constructing a truth table.    We will construct a truth table for the statement .                                                  The last column is true when exactly one of and is true, as desired.   "
},
{
  "id": "examples-4",
  "level": "2",
  "url": "sec-1-2-logic-sec-statements-arguments.html#examples-4",
  "type": "Example",
  "number": "0.1.5",
  "title": "",
  "body": "   Example 2 : Draw the truth table for the statement .    We will construct a truth table for the statement .                                                                                   "
},
{
  "id": "logical-equivalence-2",
  "level": "2",
  "url": "sec-1-2-logic-sec-statements-arguments.html#logical-equivalence-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logically equivalent "
},
{
  "id": "examples-1-2",
  "level": "2",
  "url": "sec-1-2-logic-sec-statements-arguments.html#examples-1-2",
  "type": "Example",
  "number": "0.1.6",
  "title": "",
  "body": "   Example 1 : and are logically eqivalent (i.e., ).    Consider the truth table for and :                      The two columns are identical, so .   "
},
{
  "id": "ex-distrubute-negation",
  "level": "2",
  "url": "sec-1-2-logic-sec-statements-arguments.html#ex-distrubute-negation",
  "type": "Example",
  "number": "0.1.7",
  "title": "",
  "body": "  Are and logically equivalent? That is, can you distribute the negation over the conjunction?    Consider the truth table for and :                                                        The two columns are not identical:                                      Hence , so you cannot distribute negations over conjunctions.   "
},
{
  "id": "de-morgans-laws-7",
  "level": "2",
  "url": "sec-1-2-logic-sec-statements-arguments.html#de-morgans-laws-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "De Morgan's Laws "
},
{
  "id": "def-tautology",
  "level": "2",
  "url": "sec-1-2-logic-sec-statements-arguments.html#def-tautology",
  "type": "Definition",
  "number": "0.1.8",
  "title": "",
  "body": "  A tautology is a statement that is always true.   "
},
{
  "id": "def-contradiction",
  "level": "2",
  "url": "sec-1-2-logic-sec-statements-arguments.html#def-contradiction",
  "type": "Definition",
  "number": "0.1.9",
  "title": "",
  "body": "  A contradiction is a statement that is always false.   "
},
{
  "id": "tautologies-and-contradictions-5",
  "level": "2",
  "url": "sec-1-2-logic-sec-statements-arguments.html#tautologies-and-contradictions-5",
  "type": "Example",
  "number": "0.1.10",
  "title": "",
  "body": "  Show that is a contradiction.    Consider the truth table for :                      Since is always false, it is a contradiction. Hence, .   "
},
{
  "id": "tautologies-and-contradictions-6",
  "level": "2",
  "url": "sec-1-2-logic-sec-statements-arguments.html#tautologies-and-contradictions-6",
  "type": "Example",
  "number": "0.1.11",
  "title": "",
  "body": "  Show that .    Consider the truth table for :                      Since is equivalent to , we have .   "
},
{
  "id": "sec-1-3-conditionals",
  "level": "1",
  "url": "sec-1-3-conditionals.html",
  "type": "Section",
  "number": "0.2",
  "title": "Conditionals and Biconditionals",
  "body": " Conditionals and Biconditionals   Conditionals   Conditionals are statements that are logical inferences: statements of the form If , then . We write such inferences as and read it as  implies  .    Note: Though this language ( implies ) is very common, it is often misleading. This language might make you think that can be, in some sense, deduced from , and that the truth of is necessary for to be meaningful. This is not the case, as we will soon see.  For example:   If and are the lengths of the legs of a right triangle with hypotenuse , then    Or:   If 288 is divisible by 9, then 288 is divisible by 3.   The truth of gives us information to update our knowledge about the truth of ; that is, the truth of is conditioned on .    Def. Let and be propositions. The conditional statement is the proposition if , then . The conditional statement is false when is true and is false, and true otherwise. In the conditional statement , is called the hypothesis (or antecedent or premise ) and is called the conclusion (or consequence ).    As a truth table:                             The first two rows are liekly expected, based on the discussion above.  A conditional statement that is true by virtue of the fact that its hypothesis is false (i.e., the bottom two rows) is called vacuously true , because the statement itself is true, it just does not apply in this particular situation. For example, consider our example from above:   If and are the lengths of the legs of a right triangle with hypotenuse , then    If is not a Pythagorean triple (i.e., is false), the implication is still true, it's just not relevant.    Representation as an Or Statement  I claim: .   Proof:                                        This is more profound than it seems. This implies that logical inferences can be reduced to simpler logical connectives. This is how computers implement more sophisticated logical operations. Computers cannot natively handle implications, but they can handle AND, OR, and NOT (using voltage signals and transistors).    Contrapositive, Converse, and Inverse   There are three different types of statements that are related to implications:    Contrapositive    Def. The contrapositive of the statement If , then (i.e., ) is the statement If not , then not (i.e., ).     Important Fact : Implications are logically equivalent to their contrapositives. That is, .   Proof. Homework.   Why is this so important? Because it can often simplify difficult problems into much simpler ones.   Example: What is the converse of If is even, then is even ? It is If is odd, then is odd. This is much easier to prove!     Converse    Def. The converse of the statement If , then (i.e., ) is the statement If , then (i.e., $ q p$).    Is a conditional logically equivalent to its converse? No! (Prove this.)    Inverse    Def. The inverse of the statement If , then (i.e., ) is the statement If not , then not (i.e., ).    Is a conditional logically equivalent to its inverse? No! (Prove this.)      Biconditionals     Def. Let and be propositions. The biconditional statement is the proposition if and only if . The biconditional statement is true when and have the same truth values, and is false otherwise. Biconditional statements are also called bi-implications .                               Claim: .  Note: Since can be written in terms of AND, OR, and NOT, can also be written in terms of AND, OR, and NOT.    Necessary and Sufficient Conditions  If and are statements:    is a sufficient condition for means if then .  is a necessary condition for means if not then not .    Using the contrapositive, we see that is a necessary condition for equivalently means if then . Hence, means that is a necessary and sufficient condition for (and equivalently is a necessary and sufficient condition for ).    "
},
{
  "id": "conditionals-2-2",
  "level": "2",
  "url": "sec-1-3-conditionals.html#conditionals-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note: "
},
{
  "id": "conditionals-2-8",
  "level": "2",
  "url": "sec-1-3-conditionals.html#conditionals-2-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "false true "
},
{
  "id": "conditionals-2-12",
  "level": "2",
  "url": "sec-1-3-conditionals.html#conditionals-2-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vacuously true "
},
{
  "id": "contrapositive-2",
  "level": "2",
  "url": "sec-1-3-conditionals.html#contrapositive-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "contrapositive "
},
{
  "id": "contrapositive-3",
  "level": "2",
  "url": "sec-1-3-conditionals.html#contrapositive-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Important Fact "
},
{
  "id": "converse-2",
  "level": "2",
  "url": "sec-1-3-conditionals.html#converse-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converse "
},
{
  "id": "inverse-2",
  "level": "2",
  "url": "sec-1-3-conditionals.html#inverse-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse "
},
{
  "id": "necessary-and-sufficient-conditions-3",
  "level": "2",
  "url": "sec-1-3-conditionals.html#necessary-and-sufficient-conditions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sufficient condition necessary condition "
},
{
  "id": "necessary-and-sufficient-conditions-4",
  "level": "2",
  "url": "sec-1-3-conditionals.html#necessary-and-sufficient-conditions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "necessary condition "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
