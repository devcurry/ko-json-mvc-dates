using JavaScriptAndDates.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace JavaScriptAndDates.Controllers
{
    public class ValuesController : ApiController
    {
        public HttpResponseMessage PutData([FromBody]SampleClass updates)
        {
            Console.WriteLine(updates.Id);
            Console.WriteLine(updates.CurrentDate);
            return new HttpResponseMessage( HttpStatusCode.OK);
        }

        public SampleClass GetData()
        {
            return new SampleClass { Id = 1, CurrentDate = DateTime.Now };
        }
    }

}
