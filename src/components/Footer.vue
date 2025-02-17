<template>
    <div class="footer">
        @{{ new Date().getFullYear() }}   <strong>E-Shop. All rights reserved.</strong>
        
    </div>
    </template>
    
    <script>
    export default {
        name: 'Footer'
    }
    </script>
    
    <style scoped>
    .footer {
        position: fixed;
        bottom: 0;
        height: auto;
        background-color:palegoldenrod;
        width: 100%;
        text-align-last: center;
        color: brown;
    }
    </style>
    