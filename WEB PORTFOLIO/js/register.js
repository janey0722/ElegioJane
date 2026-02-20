$(document).ready(function() {
    
    $('#saveBtn').on('click', function() {
        const $inputs = $('.input-group input');
        const data = {};
        let isValid = true;

        for (let i = 0; i < $inputs.length; i++) {
            const input = $($inputs[i]);
            const id = input.attr('id');
            const val = input.val().trim();

            data[id] = val;

            if (id !== 'mName' && !val) {
                isValid = false;
                input.css('border', '1px solid red');
            } else {
                input.css('border', '');
            }
        }

        if (!isValid) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Information',
                text: 'Please fill in all required fields (Middle name is optional).',
                confirmButtonColor: 'rgb(199, 6, 6)'
            });
            return;
        }

        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'User registered successfully.',
            timer: 600,
            showConfirmButton: false
        });

        $('#noData').remove();

        const middleInitial = data.mName ? `${data.mName} ` : '';
        const fullName = `${data.fName} ${middleInitial}${data.lName}`;

        const newRow = `
            <tr>
                <td>${fullName}</td>
                <td>${data.age}</td>
                <td>${data.email}</td>
                <td>
                    <button class="delete-row" style="color:red; cursor:pointer; border:none; background:none;">
                        Remove
                    </button>
                </td>
            </tr>
        `;

        $('#tableBody').append(newRow);

        for (let i = 0; i < $inputs.length; i++) {
            $($inputs[i]).val('');
        }
    });

    $(document).on('click', '.delete-row', function() {
        $(this).closest('tr').remove();

        const rows = $('#tableBody tr');
        let rowCount = 0;

        for (let i = 0; i < rows.length; i++) {
            rowCount++;
        }

        if (rowCount === 0) {
            $('#tableBody').append(
                '<tr id="noData"><td colspan="4" class="empty-msg" style="text-align:center;">No users registered yet.</td></tr>'
            );
        }
    });
});