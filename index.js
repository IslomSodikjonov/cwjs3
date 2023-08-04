let courses = [

    {

        title: 'SMM',

        howLong: 3

    },

    {

        title: 'Dev',

        howLong: 6

    },

    {

        title: 'Graph',

        howLong: 4

    },

]

let earnings = {

    total: 0,

    max: {},

    min: {}

}

let m = 0

let w = 0

let average_age = 0

let smm = 0

let dev = 0

let graph = 0

let students = [

    {

        sex: 'm',

        age: 14,

        payment: 1220000,

        course: {

            title: 'SMM',

        }

    },

    {

        sex: 'm',

        age: 24,

        payment: 1883000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 16,

        payment: 2190000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 19,

        payment: 718000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 15,

        payment: 2195000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 24,

        payment: 460000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 14,

        payment: 560000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 22,

        payment: 160000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 26,

        payment: 883000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 26,

        payment: 750000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 23,

        payment: 212000,

        course: {

            title: 'Graph',

        }

    },

    {

        sex: 'w',

        age: 24,

        payment: 883000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 27,

        payment: 190000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'w',

        age: 19,

        payment: 210000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 21,

        payment: 770000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 18,

        payment: 1200000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 51,

        payment: 880000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'm',

        age: 51,

        payment: 2430000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'w',

        age: 33,

        payment: 1277000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 21,

        payment: 2750000,

        course: {

            title: 'Dev'

        }

    },

]

// * // В этом примере перед вами учебный центр, в котором учиться несколько студентов. Каждый из них учиться на каком-то курсе и платит за обучение. У студентов мы видим пол, возраст, оплату, а также курс, которые они выбрали.*

// * // 1. Добавить студентам ключ howLong внутри ключа course, рядом с title. HowLong - цифра, означающая сколько месяцев длиться курс*

// * // 2. Сохранить количество девочек и мальчиков внутри переменных m и w*

// * // 3. Сохранить заработок учебного центра в earning.total*

// * // 4. Узнать кто больше всех платит за обучение в earning.max*

// * // 5. Узнать кто меньше всех платит за обучение в earning.min*

// * // 6. Посчитать сколько студентов учиться на курсах внутри dev, smm и graph*

// * // 7. Посчитать средний возраст студентов в average_age*

const setup = () => {
    
    for(let item of students) {
        
        // Task 1
        item.course.howLong = 0

        for(let course of courses) {
            if(item.course.title === course.title) {
                item.course.howLong = course.howLong 
            }
        }
        console.log(item.course);


        // Task 2
        if(item.sex === 'm') {
            m++
        } else {
            w++
        }


        // Task 3
        earnings.total += item.payment     
    

        // Task 6
        if(item.course.title === 'SMM') {
            smm++
        } else if(item.course.title === 'Dev') {
            dev++
        } else if(item.course.title === 'Graph') {
            graph++
        }  


        // Task 7
        average_age += item.age / students.length
        average_age = Math.round(average_age)
    }
    
    // Task 4
    earnings.max = students.reduce((a, b) => {
        if(a.payment > b.payment) {
            return a
        } else {
            return b
        }
    })
    // Task 5 
    earnings.min = students.reduce((a, b) => {
        if(a.payment < b.payment) {
            return a
        } else {
            return b
        }
    })   


    console.log(m);
    console.log(w);
    console.log(earnings);
    console.log(dev, smm, graph);
    console.log(average_age);



}

setup()