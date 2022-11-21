namespace Actibooking.Exceptions
{
    public class UnauthorizedExeption : ApplicationException
    {
        public UnauthorizedExeption(string email) : base($"{email} or password was not unauthorized")
        {

        }
    }
}