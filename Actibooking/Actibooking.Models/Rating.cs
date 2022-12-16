using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Models
{
    public class Rating
    {
        public int Id { get; set; }
        public int TotalRating { get; set; }
        public int AmountRatings { get; set; }
        public double AverageRating { get; set; }

        public Rating()
        {

        }
        public Rating(int id, int totalRating,int amountRatigns, double averageRating)
        {
            Id = id;
            TotalRating = totalRating;
            AmountRatings = amountRatigns;
            AverageRating = averageRating;
        }
    }
}
