const Activity = require("./activity")

class Repository {
    constructor(){
        this.activities = []
        this.id = 0;
    }
    
    createActivity(title, description, imgUrl){
        const id = this.id++
        const activity = new Activity(id,title, description, imgUrl)
        this.activities.push(activity);
    }
    getAllActivities(){
        return this.activities
    }


    deleteActivity(id){
        this.activities = this.activities.filter(activity => activity.id !== id)
    }
}

module.exports = Repository;