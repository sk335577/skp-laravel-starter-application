<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head> 
     <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title') | {{ config('app.name') }}</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">

    @stack('before-styles')

    <link rel="stylesheet" href="{{ mix('assets/backend/css/vendor.css') }}">
    
    @stack('after-styles')

</head>

<body class="hold-transition login-page">

    @yield('content');

    <!-- jQuery -->
    <script src="../../plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- AdminLTE App -->
    <script src="../../dist/js/adminlte.min.js"></script>
    <script src="{{mix('assets/backend/js/vendor.js')}}"></script>
</body>

</html>
