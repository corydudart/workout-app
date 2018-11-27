<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Workout App</title>

    <!-- Favicon -->
    {{--<link href="/node_modules/argon-design-system-free/assets/img/brand/favicon.png" rel="icon" type="image/png">--}}

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">



    <script>
        window.auth_user = {!! json_encode($auth_user) !!};
    </script>
</head>
<body>
<div id="app">
    {{--Header--}}
    @include('layouts.header')

    {{--Content--}}
    <main style="min-height:86vh;">
        <authentication></authentication>

        <router-view></router-view>
    </main>
    {{--Footer--}}
    @include('layouts.footer')

</div>




<!-- Vue -->
<script src="/js/app.js"></script>

</body>
</html>
