namespace FMS.Tables
{
    public enum StatusT
    {
        Broken, // Table is broken
        Fixing, // Table Fixing
        None,   // Table haven't Customer
        OK,     // Provided enough Food for customer
        Waiting,// Customer waiting a Food
        Paying  // Customer request Pay
    }
}