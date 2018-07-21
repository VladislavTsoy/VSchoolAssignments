function Friend(name, hobby, favPlace){
    this.name = name;
    this.hobby = hobby;
    this.favoritePlaces = [favPlace];
}
function Place(country, state) {
    this.country = country;
    this.state = state;
}

var vlad = {
    firstName: 'Vlad',
    lastName: 'Tsoy',
    age: 27,
    friends: [
        {
            name: 'Bob',
            hobby: 'eating',
            favoritePlaces: [
                {
                    country: 'United States',
                    state: 'Utah',
                }
            ]
        },
        {
            name: 'Rick',
            hobby: 'science',
            favoritePlaces: [
                {
                    country: '4th dimension',
                    state: 'Ricklantia'
                }
            ]
        }
    ],
    addFriends: function(obj){
        this.friends.push(obj);
    },
    showFriends: function(){
        for(var i = 0; i < this.friends.length; i++){
            console.log(this.friends[i].name);
        }
    },
    showFriendsFavoritePlaces: function(){
        for(var i = 0; i < this.friends.length; i++){
            console.log(this.friends[i].name + "'s favorite country is: " + this.friends[i].favoritePlaces[0].country + 
            " and their favorite state is: " + this.friends[i].favoritePlaces[0].state);
        }
    }
}

var fourthDimension = new Place('4th Dimension', 'Ricklantia');
var morty = new Friend('Morty', 'Adventures', fourthDimension);

vlad.addFriends(morty);
vlad.showFriends();
vlad.showFriendsFavoritePlaces();
