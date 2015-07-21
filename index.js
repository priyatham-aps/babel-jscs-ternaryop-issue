//Creates issue
let toogleStatus = node.removed ?
	(self.state.addNode !== '' ? !(self.state.addNode.split('_')[0] === node.id) : true)
	: (self.state.removeNode !== '' ? (self.state.removeNode.split('_')[0] === node.id) : false);

//Creates issue
toogleStatus = self.state.removeNode !== '' ? (self.state.removeNode.split('_')[0] === node.id) : false

//Does not create issue
toogleStatus = self.state.removeNode !== '' ? self.state.removeNode.split('_')[0] === node.id : false