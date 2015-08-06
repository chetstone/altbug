var alt = require('../alt');
var CountActions = require('../actions/CountActions');

// Export only for testing. For normal use, import default
export class CountStore {
    constructor() {
        this.bindActions(CountActions);

        this.total = 0.0; // grand total
        this.counts = []; // our local history
        this.step = 1; /* for now, later this can be set in settings */
        this.histsize = 12;
        this.type = 'Ordinary';

        this.exportPublicMethods({
            myAlt: this.myAlt  // for testing
        });
    }
    myAlt() {
        // this.alt undefined?
        return alt
    }

    bulkCount(val) {
        /* keep a >= 1 ms increment between counts */
        var goal = val;
        var self = this;
        if (val <= 0 ) return false;
        var timer = setInterval(function() {
            goal -= self.step /* if desired total numerical advance is entered */
            CountActions.addIncrement();
            
            if (goal <= 0) {
                /* self.emitChange(); only update after all done */
                clearInterval(timer);
            }
            /*             self.emitChange(); /* update after each step */
        },1);
        return false;
    }

    clearAllCounts() {
        /*        this.firebaseRefs["items"].remove();*/
        this.total = 0.0; // grand total
        //this.accum = 0.0; // Firebase's view of the world
        this.counts = []; // our local history
    }

    addIncrement(val=this.step) {
        /*         We just add the history entry here. Actual add is in cloudstore */
        var dat = new Date().getTime();
        var data = {value: val, date: dat};
        var state = {deleted: false, pending: false, committed: false};
        this.counts.unshift({data: data, state: state});
        /*         console.log(`addIncrement called, length ${this.counts.length}`); */
        if (this.counts.length > this.histsize) {
            this.counts.pop();
        }
        this.total += val;
    }

    deleteIncrement(index) {
        var item = this.counts.splice(index, 1);
        this.total -= item[0].data.value;
        return false
    }


    static getCount() {
        return this.getState().total
    }
}

export default alt.createStore(CountStore, 'CountStore', alt)
