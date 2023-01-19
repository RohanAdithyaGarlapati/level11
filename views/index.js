<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link href="./css/style.css" rel="stylesheet" />
    <title><%= title %></title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="./css/style.css" rel="stylesheet" />
  </head>
  <body>
    <div class="grid grid-cols-6">
      <div class="col-start-3 col-span-2">
        <h1 class="text-2xl font-semibold text-gray-600">Welcome to Voting Site</h1>
        <p class="py-2">New User? <a href="/signup" class="font-semibold text-green-600"> Sign-up now </a> </p>
        <p class="py-2">Existing User? <a href="/login" class="font-semibold text-green-600">Sign-in</a></p>
      </div>
    </div>
  </body>
</html>
