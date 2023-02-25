using BuilderPortfolio.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace BuilderPortfolio.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        public IActionResult History()
        {
            ViewData["Title"] = "История";
            return View();
        }
        public IActionResult Index()
        {
            ViewData["Title"] = "Галерия";
            return View();
            
        }
        public IActionResult Uslugi()
        {

            ViewData["Title"] = "Услуги";
            return View();
        }
        public IActionResult Kontakti()
        {

            ViewData["Title"] = "Контакти";
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}