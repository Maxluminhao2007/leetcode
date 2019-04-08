var intersection = function(nums1, nums2) {
    let result = {};
    [nums1, nums2] = nums1.length < nums2.length? [nums1, nums2]:[nums2, nums1]
    for(let i = 0; i < nums1.length; i++) {
        if(result[nums1[i]]=== undefined && nums2.indexOf(nums1[i]) !== -1) 
        result[nums1[i]] = true;
    }
    return Object.getOwnPropertyNames(result).map(c => c.charCodeAt(0) - 48)
};
console.log(intersection([1,2,2,1], [2,2]))