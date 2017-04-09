using TOEWebApi.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TOEWebApi.Controllers
{
    public class LoginController : ApiController
    {
        [HttpGet]
        [Route("api/Login/LoginDetails/{UserName}")]
        public IEnumerable<Sel_LoginDetails_Result> LoginDetails(string UserName="")
        {
            using (TALESOFEUROPEEntities context = new TALESOFEUROPEEntities())
            {
                try
                {
                    List<SqlParameter> _params = new List<SqlParameter>();
                    SqlParameter _AccountTypeParam = new SqlParameter();
                    _AccountTypeParam.ParameterName = "@UserName";
                    _AccountTypeParam.Value = UserName;
                    _params.Add(_AccountTypeParam);
                    var result = context.Database
                                .SqlQuery<Sel_LoginDetails_Result>("Sel_LoginDetails @UserName", _params.ToArray());
                    return result.ToList();
                }
                catch (Exception ex)
                {
                    string err = ex.Message;
                }

                return null;
            }
        }
    }
}
