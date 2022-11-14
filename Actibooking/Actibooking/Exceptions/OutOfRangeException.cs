namespace Actibooking.Exceptions
{
    public class OutOfRangeException : ApplicationException
    {
        public OutOfRangeException(string name, object key) : base($"{name} ({key}) was out of range")
        {

        }
    }
}
