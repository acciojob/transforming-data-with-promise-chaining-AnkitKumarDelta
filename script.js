let div = document.querySelector('#output');
let inp = document.querySelector('#ip');
let btn = document.querySelector('#btn');

function promise(n){
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res(n);
		},0);
	})
}


btn.addEventListener('click',(e)=>{
let val = inp.value;
promise(val)
.then(data=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			let newdata = data;
			div.innerText = `Result: ${newdata}`;
			res(newdata);
		},2000)
	})
})
.then(data=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			let newdata = data*2;
			div.innerText = `Result: ${newdata}`;
			res(newdata);
		},2000)
	})
})
.then(data=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			let newdata = data-3;
			div.innerText = `Result: ${newdata}`;
			res(newdata);
		},2000)
	})
})
.then(data=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			let newdata = data/2;
			div.innerText = `Result: ${newdata}`;
			res(newdata);
		},2000)
	})
})
.then(data=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			let newdata = data+10;
			div.innerText = `Final Result: ${newdata}`;
			res(newdata);
		},2000)
	})
})
})