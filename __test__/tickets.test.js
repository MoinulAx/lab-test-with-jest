const { getTicketByName, calculateTotalFromTicketNames} = require('../src/tickets.js')

const tickets = require('../data/tickets.js')


describe('getTicketByName', () => {
    test('should return the correct ticket object when the name matches exactly', () => {
      const name = tickets[0].name
      const ticket = getTicketByName(tickets, name);
      expect(ticket).toEqual(tickets[0]);
    });
  
    test('should return the correct ticket object when the name matches case-insensitively', () => {
      const name = tickets[0].name.toLowerCase()
      const ticket = getTicketByName(tickets, name);
      expect(ticket).toEqual(tickets[0]);
    });
  
    test('should return null when no matching ticket is found', () => {
      const name = 'No Match'
      const ticket = getTicketByName(tickets, name);
      expect(ticket).toBeNull();
    });
  });
  
  describe('calculateTotalFromTicketNames', () => {
    test('should return the total value of tickets when all names are valid', () => {
      const total = calculateTotalFromTicketNames(tickets, ['Adult Matinee', 'Senior Matinee']);
      expect(total).toBe(1788); 
    });
  
    test('should ignore invalid ticket names and only sum valid ones', () => {
        
        const total = calculateTotalFromTicketNames(tickets, ['Adult Matinee', 'Invalid Ticket']);
      expect(total).toBe(949); 
    });
  
    test('should return 0 when no valid ticket names are provided', () => {
      const total = calculateTotalFromTicketNames(tickets, ['Invalid Ticket', 'Another Invalid']);
      expect(total).toBe(0);
    });
  
    test('should handle case-insensitive ticket names correctly', () => {
      const total = calculateTotalFromTicketNames(tickets, ['adult matinee', 'SENIOR REGULAR']);
      expect(total).toBe(2168); 
    });
  
    
  });