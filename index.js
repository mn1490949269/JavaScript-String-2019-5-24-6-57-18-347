// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
var name=name.toUpperCase();
console.log(name);
// TODO write your code here...


// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
var s=sentence;
s=s.substr(0,1).toUpperCase()+s.substring(1,5)+s.substr(5,1).toUpperCase()+s.substring(5,15)+s.substr(15,1).toUpperCase()+s.substring(16,18)+s.substr(18,1).toUpperCase()+s.substring(19);
console.log(s);

// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
var money=money.substring(1);
console.log(money);
//TODO write your code here...
