import Vue from 'vue'

function trim(str, start, end) {
    return str.substr(start, end)
}

Vue.filter('trim', trim)