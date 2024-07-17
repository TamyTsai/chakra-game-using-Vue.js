let vm = new Vue({
    el: '#app', 
    data: {
      result: '凝聚中...',
      chakra: 0,
    },
    methods: {
        hitButton: function() {
            this.chakra ++;
        },
    },
  });


let bigTrick = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if (vm.chakra>=5) {
            resolve('螺旋丸');
        } else {
            reject('螺旋丸');
        }
    }, 3000)
});

bigTrick 
    .then(function(trick) {
        vm.result = `查克拉凝聚成功，使出${trick}`
    }) 
    .catch(function(err) {
        vm.result = `查克拉凝聚太慢，無法使出${err}`
    });
