function CourseService() {
    this.createCourse = createCourse;
    this.findAllCourses = findAllCourses;
    this.findCourseById = findCourseById;
    this.deleteCourse = deleteCourse;
    this.updateCourse = updateCourse;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/mlevoy/users';
    let self = this;
    function createCourse (course) {
        return fetch(self.url, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    }
    function findAllCourses() {
        return fetch(self.url)
            .then((response) => {
                return response.json()
            })
    }
    function findCourseById(courseId) {
        return fetch(`${self.url}/${courseId}`)
            .then((response) => {
                return response.json()
            })
    }
    function updateCourse(courseId, course) {
        return fetch(`${self.url}/${courseId}`, {
            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    }
    function deleteCourse(courseId) {
        return fetch(`${self.url}/${courseId}`, {
            method: "DELETE"
        })
    }
}