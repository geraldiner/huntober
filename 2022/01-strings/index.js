/* DAY 1 */
const NUM_TO_STR = {
	'0': 'O',
	'5': 'S',
	'1': 'I',
	'6': 'G',
	'2': 'Z',
	'7': 'L',
	'3': 'E',
	'8': 'B',
	'4': 'h',
	'9': 'q'
}

const STR_TO_NUM = {
	'O': '0',
	'S': '5',
	'I': '1',
	'G': '6',
	'Z': '2',
	'L': '7',
	'E': '3',
	'B': '8',
	'h': '4',
	'q': '9',
}

const parseString = (str) => {
	return str.split("").reduce((prev,char) => {
		// if current character is a number that needs to be converted
		if (NUM_TO_STR[char]) {
			return prev+NUM_TO_STR[char];
		}
		// if current character is a letter that needs to be converted
		if (STR_TO_NUM[char]) {
			return prev+STR_TO_NUM[char];
		}
		// if current character has no mapping, use it as is
		return prev+char;
	});
}

const compareString = (str1, str2) => {
	return str1 === str2;
}


const example1 = "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.";
const result1 = "PRO-TIP #498: IT'S NICE TO SAY HELLO.";

const input = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs";

const run1 = parseString(example1);
const comparison1 = compareString(run1, result1);

const output = parseString(input);
// console.log({output});

/* DAY 2 */
const nonsense = "af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S";
const truncNonsense = nonsense.slice(nonsense.indexOf('c')+1);
const eek = 'Eek!';
const removedEekNonsense = truncNonsense.replaceAll('Eek!', '');
// console.log(removedEekNonsense)

const reverseString = (str) => {
	return str.split("").reduce((prev, curr) => {
		return curr + prev;
	})
}

const revRemovedEekNonsense = reverseString(removedEekNonsense);
/**
 * Split this string up on *lowercase* 'V'.
 * The first character in each substring besides this first one
 * is what you need to remember for tomorrow's task.
 */
const input2 = "vS.A-#IYbSEkiQS5Sn@tq!CcG;+:^myl%CJcWzUZ;vpZQP*nH1KA*GRFI+B/xHR:><%&4.zf*2+Ey0x-#Kci LGc-0QdTBJEum%@R_?,dJk 2t5QmgZRN8xW$fQ@Ge>tub)Ep1YjX()dpD3ru1(Q<8m?vaotN<SqFz-7z8fDWj7s|=UR*E:/CYLzj*?K:uCUmhkASg8;H^/%<HU%>=hhPpLPdb|fBAMvcA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xuveA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xu";

const splitOnChar = (str, charToSplitOn) => {
	return str.split(charToSplitOn).filter((item) => item !== '');
}

const substrs = splitOnChar(input2, 'v');

const keyChars = substrs.map((substr) => substr[0]);

/* DAY 3 */
let input3 = input2;

for (let i = 0; i < substrs.length; i++) {
	for (let j = 0; j < keyChars.length; j++) {
		substrs[i] = substrs[i].replaceAll(keyChars[j], " ").trim()
	}
}

console.log(substrs);