var memoize=require("./memoize"),MAX_MEMOIZE_SIZE=500;function memoizeCapped(e){var m=memoize(e,function(e){return r.size===MAX_MEMOIZE_SIZE&&r.clear(),e}),r=m.cache;return m}module.exports=memoizeCapped;