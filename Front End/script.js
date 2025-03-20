// function showForm(formType) {
//     // إزالة الفئة active من كلا النموذجين
//     document.getElementById('employeeForm').classList.remove('active');
//     document.getElementById('hirerForm').classList.remove('active');

//     // إضافة الفئة active للنموذج الذي تم اختياره
//     if (formType === 'employee') {
//         document.getElementById('employeeForm').classList.add('active');
//         document.getElementById('hirerForm').classList.remove('active');
//         document.getElementById('employeeButton').classList.add('active');
//         document.getElementById('hirerButton').classList.remove('active');
//     } else {
//         document.getElementById('hirerForm').classList.add('active');
//         document.getElementById('employeeForm').classList.remove('active');
//         document.getElementById('hirerButton').classList.add('active');
//         document.getElementById('employeeButton').classList.remove('active');
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     showForm('employee');
// });
