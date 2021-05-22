
// converts date object to timestamp 
// return timestamo

export function getTimestampFromDate (dateObj) {

    if(dateObj){

        let utcDate = new Date(dateObj.toISOString());
        return ~~(+utcDate / 1000);
    }
    else{
        return null;
    }
}


// converts date object to timestamp 
// return date

export function getDateFromTimestamp (datetimestamp) {
    if(datetimestamp){
        let dateObj = new Date(datetimestamp * 1000);
        let newDate =  dateObj ;//new Date(dateObj.getUTCFullYear() , dateObj.getUTCMonth(),dateObj.getUTCDate())
        return dateObj;
    }
    else{
        return null
    }
 
}