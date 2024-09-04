var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function () {
        
        var calculation = this.shoes * this.stateTax;
        console.log('total Price: ', calculation); 

    }

}

purchase2.totalPrice(); // total Price:  60


var purchase2 = {
    shoes: 500,
    stateTax: 1.2,
    totalPrice: function () {
        
        var calculation = this.shoes * this.stateTax;
        console.log('total Price: ', calculation); 

    }
}

purchase2.totalPrice(); // total Price:  600