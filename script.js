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
			div.innerText = `Result: ${data}`;
			res(data);
		},2000)
	})
})
.then(data=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			div.innerText = `Result: ${data*2}`;
			res(data);
		},3000)
	})
})
.then(data=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			div.innerText = `Result: ${data-3}`;
			res(data);
		},4000)
	})
})
.then(data=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			div.innerText = `Result: ${data/2}`;
			res(data);
		},5000)
	})
})
.then(data=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			div.innerText = `Final Result: ${data+10}`;
			res(data);
		},6000)
	})
})
})