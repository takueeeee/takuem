<script>
        document.addEventListener('DOMContentLoaded', (event) => {
            const userForm = document.getElementById('userForm');
            const userList = document.getElementById('userList');

            // Load data from local storage on page load
            const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
            storedUsers.forEach(user => addUserToList(user));

            userForm.addEventListener('submit', function(event) {
                event.preventDefault();

                const firstName = document.getElementById('firstName').value;
                const lastName = document.getElementById('lastName').value;
                const age = parseInt(document.getElementById('age').value);

                if (age >= 18) {
                    const user = { firstName, lastName, age };
                    addUserToList(user);

                    // Save user to local storage
                    storedUsers.push(user);
                    localStorage.setItem('users', JSON.stringify(storedUsers));
                }
            });

            function addUserToList(user) {
                const userItem = document.createElement('div');
                userItem.classList.add('user-item');
                userItem.textContent = `${user.firstName} ${user.lastName}, Age: ${user.age}`;
                userList.appendChild(userItem);
            }
        });
    </script>