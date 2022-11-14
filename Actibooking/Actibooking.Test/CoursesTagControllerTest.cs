using Actibooking.Controllers;
using Actibooking.Data.Repository;
using Actibooking.Models;
using Actibooking.Services;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Test
{
    public class CoursesTagControllerTest
    {
        [Fact]
        public async void CreateNewCourseTag_TEST()
        {
            var iUnitOfWork = new Mock<IUnitOfWork>();
            var iLoggerCoursesTagControllerMock = new Mock<ILogger<CoursesTagController>>();
            var coursesTagController = new CoursesTagController(iUnitOfWork.Object,  iLoggerCoursesTagControllerMock.Object);

            var Tag = new CourseTag();
            Tag.Description = "Testowy";
            Tag.Name = "Testowy";
            Tag.Id = 10;
            Tag.Courses = null;

            var newCoursesTag = await coursesTagController.CreateCourseTag(Tag);
            Assert.IsType<ObjectResult>(newCoursesTag);
        }


        [Fact]
        public async void IsExistCourseTag_TEST()
        {
            var iUnitOfWork = new Mock<IUnitOfWork>();
            var iLoggerCoursesTagControllerMock = new Mock<ILogger<CoursesTagController>>();
            var coursesTagController = new CoursesTagController(iUnitOfWork.Object, iLoggerCoursesTagControllerMock.Object);

            var Tag = new CourseTag();
            Tag.Description = "Kid";


            var CoursesTags = await coursesTagController.GetAll();

        }

    }
}
