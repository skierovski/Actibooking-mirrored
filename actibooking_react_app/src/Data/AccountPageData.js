

const AccountPageData = {  
        id: 1,
        userName:	'salon.skierkowski@gmail.com',
        email:	'salon.skierkowski@gmail.com',
        phoneNumber:	'533903641',
        firstName:	'Patryk',
        lastName:	'Skierkowski',
        isTrainer: true,	
        birthDate:	'10-10-1995',
        gender:	'male',
        children: [
            {
                id: 1,
                name: 'Paweł',
                lastName: 'Skierkowski',
                birthDate: '07-06-2020'
            },
            {
                id: 2,
                name: 'Martyna',
                lastName: 'Skierkowski',
                birthDate: '08-02-2018'
            }
        ],
        participants: [
            {
                CourseId: 1,
                name: 'Zumba',
                date: '10-10-2022',
                hour: '14:30',
                dayOfWeek: 'Monday'

            },
            {
                CourseId: 2,
                name: 'Fitness',
                date: '10-11-2022',
                hour: '12:30',
                dayOfWeek: 'Friday'
            }
        ]        
}

export default AccountPageData;