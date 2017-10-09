function linkedList(){

	//helper class called node
	//represents item that we want to add to the list
	function Node(element){
		this.element = element
		this.next = null
	}

	//internal/private variable
	//stores how many items we have in the list
	var length =0;
	var head = null;

	//adds a new item to the end of the list
	this.append = function(element){
		var node = new Node(element)
		var current

		//two options:
		//there is nothing in the linked list, so we add a node and assign the head that node
		if(head === null){
			head = node
		}
		//else there are nodes in the linked list, so we start from the head
		else{
			current = head

			while(current.next){
				current = current.next
			}
			//once we jump out of the while loop it means that current.next doesn't exist
			//get the last item and assign it's next property to the new node to make the link
			current.next = node
		}

		//update the size of the list
		length++
	}

	//REMOVING ITEMS FROM A LINKED list
	//2 Scenarios:
	//removing the first element
	//or removing any element but the first one

	//There are 2 Remove Methods
	//1) removing an element from a specified position
	//2) removing an element based on the elements value

	//This is for removing an element from a specified position
	this.removeAt = function(position){
		//check for out of bounds values
		if(position >-1 && position < length){

			var index = 0
			var current = head
			var previous

		//if the position is 0 - to remove the first element 
			if(position === 0){
				head = current.next
			}
			else{
				while(index++ < position){
					previous = current
					current = current.next
				}
				//link previous with current's next: skip it to remove
				previous.next = current.next
			}
			length--
			return current.elements
		}
		else{
			return null
		}
	}// end removeAt function

	//LEFT OFF AT PAGE 77
	this.insert = function(element, position){

		if(position > -1 && positon < length){
			var node = new Node(element)
			var previous
			var current = head
			// var index = 0

			//if we want to insert this at the first position
			if(position === 0){
				node.next = current
				head = node
			}
			else{
				for(var index= 1; index < position; index++){
					if(index < position){
						previous = current
						current = current.next
					}
				}
				//we get to this part once index is one before position, and current is at position
				previous.next = node
				node.next = current
			}
			length ++
			return true
		}
		else{
			return false
		}
	}

}
