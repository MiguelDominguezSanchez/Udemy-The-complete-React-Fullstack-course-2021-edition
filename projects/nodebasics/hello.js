console.log('starting')

setTimeout(() => {
	console.log('deferred')
}, 5000)

function message() {
	console.log('hello guys')
}

message()
