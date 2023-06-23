/* global Swal */

$(document).ready(function () {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let Temp = 0;

    $('#load').click(function () {
        loadTableData(orders);
    });

    $('#AddFoodDropdown').change(function () {
        let selectedValue = $(this).val();
        if (selectedValue === '') {
            $('.add-burger').css('display', 'none');
            $('.add-Shuwarma').css('display', 'none');
            $('.add-roll').css('display', 'none');
        } else if (selectedValue === 'burger') {
            $('.add-burger').css('display', 'block');
            $('.add-Shuwarma').css('display', 'none');
            $('.add-roll').css('display', 'none');
        } else if (selectedValue === 'shuwarma') {
            $('.add-roll').css('display', 'none');
            $('.add-Shuwarma').css('display', 'block');
            $('.add-burger').css('display', 'none');
        } else if (selectedValue === 'roll') {
            $('.add-burger').css('display', 'none');
            $('.add-Shuwarma').css('display', 'none');
            $('.add-roll').css('display', 'block');
        }
    });
    $('#DisplayFoodDropdown').change(function () {
        let selectedValue = $(this).val();
        if (selectedValue === '') {
            $('.burger-table').css('display', 'none');
            $('.shuwarma-table').css('display', 'none');
            $('.roll-table').css('display', 'none');
        } else if (selectedValue === 'burger') {
            $('.burger-table').css('display', 'block');
            $('.shuwarma-table').css('display', 'none');
            $('.roll-table').css('display', 'none');
            BurgerTable();
        } else if (selectedValue === 'shuwarma') {
            $('.burger-table').css('display', 'none');
            $('.shuwarma-table').css('display', 'block');
            $('.roll-table').css('display', 'none');
            ShuwarmaTable();
        } else if (selectedValue === 'roll') {
            $('.burger-table').css('display', 'none');
            $('.shuwarma-table').css('display', 'none');
            $('.roll-table').css('display', 'block');
            RollsTable();
        }
    });

    $('.btn2').click(function (event) {
        event.preventDefault();

        let name = $(this).closest('p').find('.Name').text();
        let price = $(this).closest('p').find('.Price').text().replace('Price: ', '');
        let originalPrice = parseInt(price.replace(/\D/g, ''));

        let order = {
            name: name,
            price: price
        };

        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
        alert("Added To Card!!!");
    });

    $('.btn1').click(function (event) {
        event.preventDefault();

        let existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
        let name = $(this).closest('.data').find('h1').text();
        let price = $(this).closest('.data').find('h2 .price').text().replace('Price: ', '');
        let originalPrice = parseInt(price.replace(/\D/g, ''));

        let order = {
            name: name,
            price: price
        };

        existingOrders.push(order);
        localStorage.setItem("orders", JSON.stringify(existingOrders));
        alert("Added To Card!!!");
    });
    $('.btn3').click(function (event) {
        event.preventDefault();

//      Username: FaiqSarwar
//      Password: 123
        let username = $('#username').val();
        let password = $('#password').val();
        $.ajax({
            url: '../Login',
            type: 'POST',
            data: {
                username: username,
                password: password
            },
            success: function (response) {

                if (response === '1')
                {
                    window.location.href = '../Admin/home.jsp';
                } else {
                    alert(response);
                }

            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
    });

    $('.btn').click(function (event) {
        event.preventDefault();

        let existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
        let name = $(this).closest('.card').find('.title').text();
        let price = $(this).closest('.card').find('.features ul li .price-value').text();
        let originalPrice = parseInt(price);

        let order = {
            name: name,
            price: price
        };

        existingOrders.push(order);
        localStorage.setItem("orders", JSON.stringify(existingOrders));
        alert("Added To Card!!!");
    });


    $('#save-pizza').click(function () {
        let name = $('#pizza-name').val();
        let price = $('#pizza-price').val();
        $.ajax({
            url: '../Pizza',
            type: 'POST',
            data: {
                Purpose: 'add',
                Name: name,
                Price: price
            },
            success: function (response)
            {
                if (response === 'Successfully Added!!')
                {

                    alert(response);
                    PizzaTable();
                    $("#pizza-name").val("");
                    $("#pizza-price").val("");
                } else {
                    alert(response);
                }
            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
    });
    $('#UpdatePizza').click(function () {
        let name = $('#update-Name').val();
        let price = $('#update-Price').val();
        let updateid = Temp;
        $.ajax({
            url: '../Pizza',
            type: 'POST',
            data: {
                Purpose: 'UpdatePizza',
                Id: updateid,
                Name: name,
                Price: price
            },
            success: function (response)
            {
                if (response === 'Successfully updated!')
                {
                    alert(response);
                    Temp = 0;
                    PizzaTable();
                    $('.Pizza-Update').css('top', '-500px');
                } else {
                    alert(response);
                }
            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
    });

    $('#load1').click(function () {
        PizzaTable();
    });

    $(document).on('click', '.edit-pizza', function () {
        let id = $(this).data('id');
        Temp = id;
        $.ajax({
            url: '../Pizza',
            type: 'POST',
            data: {
                Purpose: 'update',
                Id: id
            },
            success: function (response)
            {
                $('#update-Name').val(response[0].Name);
                $('#update-Price').val(response[0].Price);

            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
        let currentTop = parseInt($('.Pizza-Update').css('top'));
        if (currentTop < 0) {
            $('.Pizza-Update').css('top', '70px');
        } else {
            $('.Pizza-Update').css('top', '-500px');
        }
    });
    $(document).on('click', '.delete-pizza', function () {
        let id = $(this).data('id');
        $.ajax({
            url: '../Pizza',
            type: 'POST',
            data: {
                Purpose: 'delete',
                Id: id
            },
            success: function (response)
            {
                alert(response);
                PizzaTable();
            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
    });



    $('#save-deal').click(function () {
        let name = $('#deal-name').val();
        let p1 = $('#deal-p1').val();
        let q1 = $('#deal-q1').val();
        let p2 = $('#deal-p2').val();
        let q2 = $('#deal-q2').val();
        let p3 = $('#deal-p3').val();
        let q3 = $('#deal-q3').val();
        let price = $('#deal-price').val();
        $.ajax({
            url: '../Deals',
            type: 'POST',
            data: {
                Purpose: 'add',
                Name: name,
                P1: p1,
                Q1: q1,
                P2: p2,
                Q2: q2,
                P3: p3,
                Q3: q3,
                Price: price
            },
            success: function (response)
            {
                if (response === 'Successfully Added!!')
                {
                    alert(response);
                    $('#deal-name').val("");
                    $('#deal-p1').val("");
                    $('#deal-q1').val("");
                    $('#deal-p2').val("");
                    $('#deal-q2').val("");
                    $('#deal-p3').val("");
                    $('#deal-q3').val("");
                    $('#deal-price').val("");
                    DealTable();
                } else {
                    alert(response);
                }
            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
    });

    $('#load2').click(function () {
        DealTable();
    });
    $(document).on('click', '.delete-deal', function () {
        let id = $(this).data('id');
        $.ajax({
            url: '../Deals',
            type: 'POST',
            data: {
                Purpose: 'delete',
                Id: id
            },
            success: function (response)
            {
                alert(response);
                DealTable();
            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
    });
    $(document).on('click', '.edit-deal', function () {
        let id = $(this).data('id');
        Temp = id;
        $.ajax({
            url: '../Deals',
            type: 'POST',
            data: {
                Purpose: 'update',
                Id: id
            },
            success: function (response)
            {
                $('#update-deal-name').val(response[0].Name);
                $('#update-deal-p1').val(response[0].P1);
                $('#update-deal-q1').val(response[0].Q1);
                $('#update-deal-p2').val(response[0].p2);
                $('#update-deal-q2').val(response[0].Q2);
                $('#update-deal-p3').val(response[0].P3);
                $('#update-deal-q3').val(response[0].Q3);
                $('#update-deal-price').val(response[0].Price);

            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
        let currentTop = parseInt($('.deal-Update').css('top'));
        if (currentTop < 0) {
            $('.deal-Update').css('top', '20px');
        } else {
            $('.deal-Update').css('top', '-1000px');
        }
    });
    $('#UpdateDeal').click(function () {

        let name = $('#update-deal-name').val();
        let p1 = $('#update-deal-p1').val();
        let q1 = $('#update-deal-q1').val();
        let p2 = $('#update-deal-p2').val();
        let q2 = $('#update-deal-q2').val();
        let p3 = $('#update-deal-p3').val();
        let q3 = $('#update-deal-q3').val();
        let price = $('#update-deal-price').val();
        let updateid = Temp;
        $.ajax({
            url: '../Deals',
            type: 'POST',
            data: {
                Purpose: 'UpdateDeal',
                Id: updateid,
                Name: name,
                P1: p1,
                Q1: q1,
                P2: p2,
                Q2: q2,
                P3: p3,
                Q3: q3,
                Price: price
            },
            success: function (response)
            {
                alert(response);
                $('.deal-Update').css('top', '-1000px');
                Temp = 0;
                DealTable();
            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
    });
    function DealTable()
    {
        $.ajax({
            url: '../Deals',
            type: 'POST',
            data: {
                Purpose: 'fetch'
            },
            success: function (response)
            {
//                alert(response);
                let data = JSON.parse(response);
                let tableBody = $('#tabal-Deal');
                tableBody.empty();
                let tableHeader = $('<tr>');
                tableHeader.append($('<th>').text("Name"));
                tableHeader.append($('<th>').text("Product 1"));
                tableHeader.append($('<th>').text("Quantity"));
                tableHeader.append($('<th>').text("Product 2"));
                tableHeader.append($('<th>').text("Quantity"));
                tableHeader.append($('<th>').text("Product 3"));
                tableHeader.append($('<th>').text("Quantity"));
                tableHeader.append($('<th>').text("Price"));
                tableHeader.append($('<th>').text("Action"));
                tableBody.append(tableHeader);
                for (let i = 0; i < data.length; i++) {
                    let deal = data[i];
                    let row = $('<tr>');
                    $('<td>').text(deal.Name).appendTo(row);
                    $('<td>').text(deal.P1).appendTo(row);
                    $('<td>').text(deal.Q1).appendTo(row);
                    $('<td>').text(deal.p2).appendTo(row);
                    $('<td>').text(deal.Q2).appendTo(row);
                    $('<td>').text(deal.P3).appendTo(row);
                    $('<td>').text(deal.Q3).appendTo(row);
                    $('<td>').text(deal.Price).appendTo(row);
                    let actions = $('<td>');
                    let editLink = $('<a>')
                            .attr('href', '#')
                            .attr('data-id', deal.Id)
                            .addClass('edit-deal')
                            .html('<i class="fa-solid fa-pen-to-square"></i>');
                    actions.append(editLink);
                    let deleteLink = $('<a>')
                            .attr('href', '#')
                            .attr('data-id', deal.Id)
                            .addClass('delete-deal')
                            .html('<i class="fa-solid fa-trash"></i>');
                    actions.append('<span class="icon">').append(deleteLink);

                    row.append(actions);
                    tableBody.append(row);
                }
            }
        });
    }

    $('#AddBurger').click(function () {
        let name = $("#burger-name").val();
        let price = $("#burger-price").val();
        $.ajax({
            url: '../Burgers',
            type: 'POST',
            data: {
                Purpose: 'add',
                Name: name,
                Price: price
            },
            success: function (response)
            {
                if (response === 'Successfully Added!!')
                {
                    alert(response);
                    BurgerTable();
                    $("#burger-name").val("");
                    $("#burger-price").val("");
                } else {
                    alert(response);
                }

            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
    });
    $(document).on('click', '.delete-burger', function () {
        let id = $(this).data('id');
        $.ajax({
            url: '../Burgers',
            type: 'POST',
            data: {
                Purpose: 'delete',
                Id: id
            },
            success: function (response)
            {
                alert(response);
                BurgerTable();
            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
    });
    $(document).on('click', '.edit-burger', function () {
        let id = $(this).data('id');
        Temp = id;
        $.ajax({
            url: '../Burgers',
            type: 'POST',
            data: {
                Purpose: 'update',
                Id: id
            },
            success: function (response)
            {
                $('#update-Burger-Name').val(response[0].Name);
                $('#update-Burger-Price').val(response[0].Price);

            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
        let currentTop = parseInt($('.Burger-Update').css('top'));
        if (currentTop < 0) {
            $('.Burger-Update').css('top', '70px');
        } else {
            $('.Burger-Update').css('top', '-500px');
        }
    });
    $('#UpdateBurger').click(function (event) {
        event.preventDefault();
        let name = $('#update-Burger-Name').val();
        let price = $('#update-Burger-Price').val();
        let updateid = Temp;
        $.ajax({
            url: '../Burgers',
            type: 'POST',
            data: {
                Purpose: 'UpdateBurgers',
                Id: updateid,
                Name: name,
                Price: price
            },
            success: function (response)
            {
                if (response === 'Successfully updated!')
                {
                    alert(response);
                    Temp = 0;
                    BurgerTable();
                    $('.Burger-Update').css('top', '-500px');
                } else {
                    alert(response);
                }
            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
    });
    $('#AddShuwarma').click(function () {
        let name = $("#Shuwarma-name").val();
        let price = $("#Shuwarma-price").val();
        $.ajax({
            url: '../Shuwarma',
            type: 'POST',
            data: {
                Purpose: 'add',
                Name: name,
                Price: price
            },
            success: function (response)
            {
                if (response === 'Successfully Added!!')
                {
                    alert(response);
                    ShuwarmaTable();
                    $("#Shuwarma-name").val("");
                    $("#Shuwarma-price").val("");
                } else {
                    alert(response);
                }

            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
    });
    $(document).on('click', '.delete-shuwarma', function () {
        let id = $(this).data('id');
        $.ajax({
            url: '../Shuwarma',
            type: 'POST',
            data: {
                Purpose: 'delete',
                Id: id
            },
            success: function (response)
            {
                alert(response);
                ShuwarmaTable();
            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
    });
    $(document).on('click', '.edit-shuwarma', function () {
        let id = $(this).data('id');
        Temp = id;
        $.ajax({
            url: '../Shuwarma',
            type: 'POST',
            data: {
                Purpose: 'update',
                Id: id
            },
            success: function (response)
            {
                $('#update-Shuwarma-Name').val(response[0].Name);
                $('#update-Shuwarma-Price').val(response[0].Price);

            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
        let currentTop = parseInt($('.Shuwarma-Update').css('top'));
        if (currentTop < 0) {
            $('.Shuwarma-Update').css('top', '70px');
        } else {
            $('.Shuwarma-Update').css('top', '-500px');
        }
    });
    $('#UpdateShuwarma').click(function (event) {
        event.preventDefault();
        let name = $('#update-Shuwarma-Name').val();
        let price = $('#update-Shuwarma-Price').val();
        let updateid = Temp;
        $.ajax({
            url: '../Shuwarma',
            type: 'POST',
            data: {
                Purpose: 'UpdateShuwarma',
                Id: updateid,
                Name: name,
                Price: price
            },
            success: function (response)
            {
                if (response === 'Successfully updated!')
                {
                    alert(response);
                    Temp = 0;
                    ShuwarmaTable();
                    $('.Shuwarma-Update').css('top', '-500px');
                } else {
                    alert(response);
                }

            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
    });
    $('#AddRoll').click(function () {
        let name = $("#roll-name").val();
        let price = $("#roll-price").val();
        $.ajax({
            url: '../Rolls',
            type: 'POST',
            data: {
                Purpose: 'add',
                Name: name,
                Price: price
            },
            success: function (response)
            {
                if (response === 'Successfully Added!!')
                {
                    alert(response);
                    RollsTable();
                    $("#roll-name").val("");
                    $("#roll-price").val("");
                } else {
                    alert(response);
                }

            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
    });
    $(document).on('click', '.delete-Roll', function () {
        let id = $(this).data('id');
        $.ajax({
            url: '../Rolls',
            type: 'POST',
            data: {
                Purpose: 'delete',
                Id: id
            },
            success: function (response)
            {
                alert(response);
                RollsTable();
            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
    });
    $(document).on('click', '.edit-Roll', function () {
        let id = $(this).data('id');
        Temp = id;
        $.ajax({
            url: '../Rolls',
            type: 'POST',
            data: {
                Purpose: 'update',
                Id: id
            },
            success: function (response)
            {
                $('#update-Roll-Name').val(response[0].Name);
                $('#update-Roll-Price').val(response[0].Price);

            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
        let currentTop = parseInt($('.Roll-Update').css('top'));
        if (currentTop < 0) {
            $('.Roll-Update').css('top', '70px');
        } else {
            $('.Roll-Update').css('top', '-500px');
        }
    });
    $('#UpdateRoll').click(function (event) {
        event.preventDefault();
        let name = $('#update-Roll-Name').val();
        let price = $('#update-Roll-Price').val();
        let updateid = Temp;
        $.ajax({
            url: '../Rolls',
            type: 'POST',
            data: {
                Purpose: 'UpdateRoll',
                Id: updateid,
                Name: name,
                Price: price
            },
            success: function (response)
            {
                if (response === 'Successfully updated!')
                {
                    alert(response);
                    Temp = 0;
                    RollsTable();
                    $('.Roll-Update').css('top', '-500px');
                } else {
                    alert(response);
                }
            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + error);
            }
        });
    });
    function PizzaTable() {
        $.ajax({
            url: '../Pizza',
            type: 'POST',
            data: {
                Purpose: 'fetch'
            },
            success: function (response)
            {
                let data = JSON.parse(response);
                let tableBody = $('#tabal-piza');
                tableBody.empty();
                let tableHeader = $('<tr>');
                tableHeader.append($('<th>').text("Name"));
                tableHeader.append($('<th>').text("Price"));
                tableHeader.append($('<th>').text("Action"));
                tableBody.append(tableHeader);
                for (let i = 0; i < data.length; i++) {
                    let pizza = data[i];
                    let row = $('<tr>');
                    $('<td>').text(pizza.Name).appendTo(row);
                    $('<td>').text(pizza.Price).appendTo(row);
                    let actions = $('<td>');
                    let editLink = $('<a>')
                            .attr('href', '#')
                            .attr('data-id', pizza.Id)
                            .addClass('edit-pizza')
                            .html('<i class="fa-solid fa-pen-to-square"></i>');
                    actions.append(editLink);
                    let deleteLink = $('<a>')
                            .attr('href', '#')
                            .attr('data-id', pizza.Id)
                            .addClass('delete-pizza')
                            .html('<i class="fa-solid fa-trash"></i>');
                    actions.append('<span class="icon">').append(deleteLink);

                    row.append(actions);
                    tableBody.append(row);
                }
            }
        });
    }
    function loadTableData(data) {
        let sum = 0;
        let tableBody = $('#tabal-data');
        tableBody.empty();
        let tableHeader = $('<tr>');
        tableHeader.append($('<th>').text("Name"));
        tableHeader.append($('<th>').text("Price"));
        tableHeader.append($('<th>').text("Action"));
        tableBody.append(tableHeader);
        for (let i = 0; i < data.length; i++) {
            let row = $('<tr>');
            row.append($('<td>').text(data[i].name));
            row.append($('<td>').text(data[i].price));
            let anchor = $('<a href="#" class="delete">');
            let icon = $('<i class="fa-solid fa-trash fa-beat-fade"></i>');
            anchor.append(icon);
            anchor.attr('data-index', i);
            let td = $('<td>');
            td.append(anchor);
            row.append(td);
            tableBody.append(row);
        }
        for (let i = 0; i < data.length; i++) {
            sum = sum + parseInt(data[i].price.replace(/\D/g, ''));
        }
        $('#Total-amount').val(sum);

        $('.delete').click(function () {
            let index = $(this).attr('data-index');
            let orders = JSON.parse(localStorage.getItem("orders")) || [];
            if (index >= 0 && index < orders.length) {
                orders.splice(index, 1);
                localStorage.setItem("orders", JSON.stringify(orders));
                loadTableData(orders);
            }
        });
    }

    function BurgerTable()
    {
        $.ajax({
            url: '../Burgers',
            type: 'POST',
            data: {
                Purpose: 'fetch'
            },
            success: function (response)
            {
                let data = JSON.parse(response);
                let tableBody = $('#tabal-burger');
                tableBody.empty();
                let tableHeader = $('<tr>');
                tableHeader.append($('<th>').text("Name"));
                tableHeader.append($('<th>').text("Price"));
                tableHeader.append($('<th>').text("Action"));
                tableBody.append(tableHeader);
                for (let i = 0; i < data.length; i++) {
                    let Burger = data[i];
                    let row = $('<tr>');
                    $('<td>').text(Burger.Name).appendTo(row);
                    $('<td>').text(Burger.Price).appendTo(row);
                    let actions = $('<td>');
                    let editLink = $('<a>')
                            .attr('href', '#')
                            .attr('data-id', Burger.Id)
                            .addClass('edit-burger')
                            .html('<i class="fa-solid fa-pen-to-square"></i>');
                    actions.append(editLink);
                    let deleteLink = $('<a>')
                            .attr('href', '#')
                            .attr('data-id', Burger.Id)
                            .addClass('delete-burger')
                            .html('<i class="fa-solid fa-trash"></i>');
                    actions.append('<span class="icon">').append(deleteLink);

                    row.append(actions);
                    tableBody.append(row);
                }
            }
        });
    }
    function RollsTable()
    {
        $.ajax({
            url: '../Rolls',
            type: 'POST',
            data: {
                Purpose: 'fetch'
            },
            success: function (response)
            {
                let data = JSON.parse(response);
                let tableBody = $('#tabal-roll');
                tableBody.empty();
                let tableHeader = $('<tr>');
                tableHeader.append($('<th>').text("Name"));
                tableHeader.append($('<th>').text("Price"));
                tableHeader.append($('<th>').text("Action"));
                tableBody.append(tableHeader);
                for (let i = 0; i < data.length; i++) {
                    let Roll = data[i];
                    let row = $('<tr>');
                    $('<td>').text(Roll.Name).appendTo(row);
                    $('<td>').text(Roll.Price).appendTo(row);
                    let actions = $('<td>');
                    let editLink = $('<a>')
                            .attr('href', '#')
                            .attr('data-id', Roll.Id)
                            .addClass('edit-Roll')
                            .html('<i class="fa-solid fa-pen-to-square"></i>');
                    actions.append(editLink);
                    let deleteLink = $('<a>')
                            .attr('href', '#')
                            .attr('data-id', Roll.Id)
                            .addClass('delete-Roll')
                            .html('<i class="fa-solid fa-trash"></i>');
                    actions.append('<span class="icon">').append(deleteLink);

                    row.append(actions);
                    tableBody.append(row);
                }
            }
        });
    }
    function ShuwarmaTable()
    {
        $.ajax({
            url: '../Shuwarma',
            type: 'POST',
            data: {
                Purpose: 'fetch'
            },
            success: function (response)
            {
                let data = JSON.parse(response);
                let tableBody = $('#tabal-shuwarma');
                tableBody.empty();
                let tableHeader = $('<tr>');
                tableHeader.append($('<th>').text("Name"));
                tableHeader.append($('<th>').text("Price"));
                tableHeader.append($('<th>').text("Action"));
                tableBody.append(tableHeader);
                for (let i = 0; i < data.length; i++) {
                    let shuwarma = data[i];
                    let row = $('<tr>');
                    $('<td>').text(shuwarma.Name).appendTo(row);
                    $('<td>').text(shuwarma.Price).appendTo(row);
                    let actions = $('<td>');
                    let editLink = $('<a>')
                            .attr('href', '#')
                            .attr('data-id', shuwarma.Id)
                            .addClass('edit-shuwarma')
                            .html('<i class="fa-solid fa-pen-to-square"></i>');
                    actions.append(editLink);
                    let deleteLink = $('<a>')
                            .attr('href', '#')
                            .attr('data-id', shuwarma.Id)
                            .addClass('delete-shuwarma')
                            .html('<i class="fa-solid fa-trash"></i>');
                    actions.append('<span class="icon">').append(deleteLink);

                    row.append(actions);
                    tableBody.append(row);
                }
            }
        });
    }

    $('#save-order').click(function () {
        let name = $('#user-name').val();
        let phone = $('#user-phone').val();
        let address = $('#user-address').val();
        let total = $('#Total-amount').val();
        $.ajax({
            url: '../Customers',
            type: 'POST',
            data: {
                Purpose: 'add',
                Name: name,
                Phone: phone,
                Address: address,
                Total: total
            },
            success: function (response)
            {
                if (response === 'Successfully Added!!')
                {
                    alert("Order Saved");
                    $('#user-name').val("");
                    $('#user-phone').val("");
                    $('#user-address').val("");
                    $('#Total-amount').val("");
                    localStorage.removeItem("orders");
                } else {
                    alert(response);
                }
            },
            error: function (xhr, status, error) {
                console.log('An error occurred: ' + xhr);
            }
        });

    });

    $('#load-record').click(function () {
        ShowAllRecord();
    });
    $('#search').click(function () {
        let date = $('#fetch-data').val();
        let pattern = /\d{4}-\d{2}-\d{2}/;
        if (!pattern.test(date)) {
            alert("Try to use this format: yyyy-mm-dd");
        }
        $.ajax({
            url: '../Customers',
            type: 'POST',
            data: {
                Purpose: 'search',
                Date: date
            },
            success: function (response)
            {
                if (response === 'no')
                {
                    alert("No record found at this date");
                } else {
                    let data = JSON.parse(response);
                    let tableBody = $('#tabal-search-record');
                    tableBody.empty();
                    let tableHeader = $('<tr>');
                    tableHeader.append($('<th>').text("Name"));
                    tableHeader.append($('<th>').text("Phone"));
                    tableHeader.append($('<th>').text("Address"));
                    tableHeader.append($('<th>').text("Total"));
                    tableHeader.append($('<th>').text("Date"));
                    tableBody.append(tableHeader);
                    for (let i = 0; i < data.length; i++) {
                        let Data = data[i];
                        let row = $('<tr>');
                        $('<td>').text(Data.Name).appendTo(row);
                        $('<td>').text(Data.Phone).appendTo(row);
                        $('<td>').text(Data.Address).appendTo(row);
                        $('<td>').text(Data.Total).appendTo(row);
                        $('<td>').text(Data.Date).appendTo(row);
                        tableBody.append(row);
                    }
                }

            }
        });
    });


    function ShowAllRecord()
    {
        $.ajax({
            url: '../Customers',
            type: 'POST',
            data: {
                Purpose: 'fetch'
            },
            success: function (response)
            {
                let data = JSON.parse(response);
                let tableBody = $('#tabal-all-record');
                tableBody.empty();
                let tableHeader = $('<tr>');
                tableHeader.append($('<th>').text("Name"));
                tableHeader.append($('<th>').text("Phone"));
                tableHeader.append($('<th>').text("Address"));
                tableHeader.append($('<th>').text("Total"));
                tableHeader.append($('<th>').text("Date"));
                tableBody.append(tableHeader);
                for (let i = 0; i < data.length; i++) {
                    let Data = data[i];
                    let row = $('<tr>');
                    $('<td>').text(Data.Name).appendTo(row);
                    $('<td>').text(Data.Phone).appendTo(row);
                    $('<td>').text(Data.Address).appendTo(row);
                    $('<td>').text(Data.Total).appendTo(row);
                    $('<td>').text(Data.Date).appendTo(row);
                    tableBody.append(row);
                }
            }
        });
    }
});
  