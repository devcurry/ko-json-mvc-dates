using JavaScriptAndDates.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JavaScriptAndDates.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Home()
        {
            return View();
        }

        public JsonResult SetData(SampleClass updates)
        {
            Console.WriteLine(updates.Id);
            Console.WriteLine(updates.CurrentDate);
            return Json(updates);
        }

        public JsonResult GetData()
        {
            return Json(new SampleClass { Id = 1, CurrentDate = DateTime.Now }, JsonRequestBehavior.AllowGet);
        }
    }
}
