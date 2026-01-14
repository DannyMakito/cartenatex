import express from 'express';
import { supabase } from '../lib/supabase';
import { requireAdmin } from '../middleware/adminAuth';

export const bookingsRouter = express.Router();

// POST /api/bookings - public: create a booking
bookingsRouter.post('/', async (req, res) => {
  const {
    customer_name,
    customer_phone,
    customer_email,
    service_id,
    preferred_date,
    preferred_time,
    note,
  } = req.body;

  if (!customer_name || !customer_phone || !service_id || !preferred_date || !preferred_time) {
    return res.status(400).json({
      error: 'customer_name, customer_phone, service_id, preferred_date, preferred_time are required',
    });
  }

  const { data, error } = await supabase
    .from('bookings')
    .insert([
      {
        customer_name,
        customer_phone,
        customer_email,
        service_id,
        preferred_date,
        preferred_time,
        note,
        status: 'pending',
      },
    ])
    .select()
    .single();

  if (error) {
    console.error('Error creating booking:', error);
    return res.status(500).json({ error: 'Failed to create booking' });
  }

  // TODO: send email / WhatsApp notification to admin here

  return res.status(201).json(data);
});

// GET /api/bookings - admin: list bookings (optionally filter by status)
bookingsRouter.get('/', requireAdmin, async (req, res) => {
  const { status } = req.query;

  let query = supabase.from('bookings').select('*').order('created_at', { ascending: false });

  if (status && typeof status === 'string') {
    query = query.eq('status', status);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching bookings:', error);
    return res.status(500).json({ error: 'Failed to fetch bookings' });
  }

  return res.json(data);
});

// PATCH /api/bookings/:id/status - admin: update booking status
bookingsRouter.patch('/:id/status', requireAdmin, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const allowed = ['pending', 'approved', 'rejected', 'rescheduled'];
  if (!allowed.includes(status)) {
    return res.status(400).json({ error: 'Invalid status value' });
  }

  const { data, error } = await supabase
    .from('bookings')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating booking status:', error);
    return res.status(500).json({ error: 'Failed to update booking status' });
  }

  // TODO: send confirmation notification to customer when approved/rescheduled

  return res.json(data);
});


